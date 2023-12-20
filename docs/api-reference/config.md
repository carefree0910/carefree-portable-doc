---
id: config
title: Config
---

import Badget from '@site/src/components/Badget';

:::info User Guide
* [Configurations](/docs/user-guides/configurations)
:::

`carefree-portable` 📦️ is designed to hold configurations in one single class - the `IConfig` class.

```python title="cfport/config.py"
@dataclass
class IConfig:
    workspace: str = DEFAULT_WORKSPACE
    allow_existing: bool = True
    assets: Optional[List[TAsset]] = None
    downloads: Dict[str, Union[str, List[str]]] = field(default_factory=dict)
    python_requirements: List[Union[str, PyRequirement]] = field(default_factory=list)
    huggingface_space_app_file: Optional[str] = None
    python_launch_cli: Optional[str] = None
    python_launch_entry: Optional[str] = None
    external_blocks: Optional[List[str]] = None
    version: Optional[str] = None
```

This class is not intended to be instantiated directly, it should be generated internally from the configuration JSON files (e.g., `cfport.json`). You may find that contents in this page are almost the same as the [User Guide](/docs/user-guides/configurations).

### `workspace`

<Badget type="str" defaultValue='"cfport_package"' />

The workspace path, this is where your portable package will be stored.

### `allow_existing`

<Badget type="bool" defaultValue="True" />

Indicates whether to allow existing workspace. This is useful when the package process crashes and you want to restart it with caches.

### `assets`

<Badget type={<>List[str | dict | <a href="/carefree-portable-doc/docs/api-reference/dataclasses#asset">Asset</a>] | None</>} defaultValue="None" />

The list of assets to fetch.

If it is not `None`, the items in the list will be converted into [Asset](/docs/api-reference/dataclasses#asset) objects for further processing:

- `str` will be converted into `Asset(path=asset)`.
- `dict` will be converted into `Asset(**asset)`.

### `downloads`

:::info Reference
* [JSONs - downloads](/docs/reference/jsons#downloads)
:::

<Badget type="Dict[str, str | List[str]]" defaultValue="{}" />

The dictionary of download configurations.
- The key should be one of the files' names in the `cfport/settings/downloads` folder.
- The value should be one of the keys in the corresponding `json` file.

Here's an example, which indicates we will download the file associated with the `3.10.11_64-bit` key in the `python_embeddables.json` file:

```json
{
  "python_embeddables": "3.10.11_64-bit"
}
```

And here's the pseudo code of how we process it:

```python title="cfport/executer/blocks/download.py"
for k, vs in downloads.items():
    if isinstance(vs, str):
        vs = [vs]
    k_urls_path = SETTINGS_DIR / "downloads" / f"{k}.json"
    with k_urls_path.open("r") as f:
        k_urls = json.load(f)
    for v in vs:
        v_url = k_urls.get(v)
        if isinstance(v_url, dict):
            v_url = v_url.get(platform)
        download(v_url)
```

### `python_requirements`

<Badget type={<>List[str | dict | <a href="/carefree-portable-doc/docs/api-reference/dataclasses#pyrequirement">PyRequirement</a>]</>} defaultValue="[]" />

The list of Python requirements.

The items in the list will be converted into [PyRequirement](/docs/api-reference/dataclasses#pyrequirement) objects for further processing:

- `str` will be converted into `PyRequirement(package_name=req)`.
- `dict` will be converted into `PyRequirement(**req)`.

### `huggingface_space_app_file`

<Badget type="str | None" defaultValue="None" />

The Hugging Face space app file, if any.

### `python_launch_cli`

<Badget type="str | None" defaultValue="None" />

The Python launch CLI file. It should relative to the `site-packages` directory.

### `python_launch_entry`

<Badget type="str | None" defaultValue="None" />

The Python launch entry file. It should relative to the `workspace`.

### `external_blocks`

<Badget type="List[str] | None" defaultValue="None" />

The list of external blocks, see [`Block`](/docs/reference/design-philosophy#block) for more details.
