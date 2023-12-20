---
id: design-philosophy
title: Design Philosophy
---

`carefree-portable` 📦️ want's to achieve the following goals:

- **Serializable**: Everything should be able to configure and run with a single `JSON` file.
- **Extensible**: The packaging process should be streamlined, and one can easily add new [`Block`](#block) to the system.

Here's the pseudo code of the packaging process:

```python
config = json.load(...)
blocks = [Block(), ...]
for block in blocks:
   block.build(config)
```

And that's it! Since packaging is more of an asset-heavy task instead of a logic-heavy task, these codes should be enough to handle most of the cases.

Here are some pre-defined default blocks, maybe they can illustrate the style of the `carefree-portable` 📦️ system to some extent (source codes could be found [here](https://github.com/carefree0910/carefree-portable/tree/main/cfport/executer/blocks)):

- `PrepareBlock`: prepare the workspace, ask user whether to overwrite existing one.
- `PreparePythonBlock`: the downloaded embeddalbe python package cannot be used directly, and this block is to handle the hijack processes.
- `DownloadBlock` / `FetchAssetsBlock`: download assets.
- `InstallPythonRequirementsBlock`: install python requirements.
- `SetPythonLaunchScriptBlock`: set the python launch script, so users can launch the portable package with a single command / with one click.

## `Block`

:::info API Reference
- [Config](/docs/api-reference/config)
:::

Every `Block` should inherit from the `IExecuteBlock`, and only needs to implement the `build` method:

```python
from cfport import *

@IExecuteBlock.register("my_fancy_block")
class MyFancyBlock(IExecuteBlock):
    def build(self, config: IConfig) -> None:
        ...
```

And there are two scenarios where you may want to create a new `Block`, which will be discussed in the following sections.

### Default `Block`

These `Block`s will be deeply integrated into the `carefree-portable` 📦️ system, and will be used by default. They often require the [`IConfig`](/docs/api-reference/config) to be modified in order to control their behaviors, and should often satisfy the following constraints:

- Should be general enough to be used in many cases.
- Should be able to fully configure with JSON settings.
- Should have as less side effects as possible.

For example, when I'm working on the [Stable Diffusion - Playground v2](https://github.com/carefree0910/carefree-portable/tree/main/examples/sd_playground_v2) example, I find that the `app.py` from HuggingFace Spaces cannot be used directly, because they often use `import spaces` & `@spaces` in the codes, which require the HF's special environment to work properly. So I have to implement a specific `Block` to make things work, and here's what I've done:

- Add a `huggingface_space_app_file` field in the [`IConfig`](/docs/api-reference/config).
- Implement a `HijackHFSpaceAppBlock` to hijack the `app.py` file, if it is specified in the `huggingface_space_app_file` field.

Here are the pseudo codes of the `Block`:

```python title="cfport/executer/blocks/hijack.py"
import_spaces = "import spaces"
decorate_spaces = "@spaces"

def hijack_hf_space_app(line: str) -> str:
    if line.startswith(import_spaces):
        # remove the import
        return line[len(import_spaces) :]
    if line.startswith(decorate_spaces):
        # comment out the decorator
        return f"# {line}"
    return line

@IExecuteBlock.register("hijack_hf_space_app")
class HijackHFSpaceAppBlock(IExecuteBlock):
    def build(self, config: IConfig) -> None:
        hf_space_app = config.huggingface_space_app_file
        # do nothing if `huggingface_space_app_file` is not specified
        if hf_space_app is None:
            return
        workspace = Path(config.workspace)
        log(f"hijacking huggingface space app file '{hf_space_app}'")
        hijack_file(workspace / hf_space_app, hijack_hf_space_app)
```

As you can see, this `Block` will only be executed when the `huggingface_space_app_file` field is specified, and it will only hijack the specified file. In this case, we solve a general problem (create portable version of HF Spaces) with a JSON configurable `Block`, and it has no side effects on other parts of the system.

### Specific `Block`

These `Block`s are often used to solve specific problems, and they are supposed to be used in a specific context. They should not touch the [`IConfig`](/docs/api-reference/config), and often only contain some post-processing business logic.

For example, when I'm working on the [Stable Diffusion Web UI](https://github.com/carefree0910/carefree-portable/blob/main/examples/sd_webui) example, I found that although A1111 has done most of the works, some small hijacks still need to be made to run it 'out-of-the-box'. So I created a specific `Block` to hijack the `*.bat` files, and everything can work 'end-to-end' now.

:::note
Check the [source codes](https://github.com/carefree0910/carefree-portable/blob/main/examples/sd_webui/run.py) if you are interested.
:::
