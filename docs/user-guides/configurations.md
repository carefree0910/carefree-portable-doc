---
id: configurations
title: Configurations
---

import Badget from '@site/src/components/Badget';

:::info API Reference
* [Config](/docs/api-reference/Config)
* [Dataclasses](/docs/api-reference/Dataclasses)
:::

`carefree-portable` 📦️ is designed to hold configurations in one single file - the `cfport.json` file. This file has an identical structure with the [`Config`](/docs/api-reference/Config) class, so you may find that contents in this page are almost the same as the [API Reference](/docs/api-reference/Config).

Typical `cfpot.json` file looks like this:

```json
{
  "type": "auto",
  "info": {
    "workspace": "carefree-portable",
    "allow_existing": true,
    "assets": null,
    "downloads": {
      "python_embeddables": "3.10.11_64-bit"
    },
    "python_requirements": [
      {
        "install_command": "$pip install ."
      }
    ],
    "python_launch_cli": "cfport/cli.py",
    "external_blocks": null
  }
}
```

- The `type` field indicates the target OS platform.
- The `info` field contains all the configurations we need to build a portable package.

Below are the detail descriptions of each field in `info`.

### `workspace`

<Badget type="str" defaultValue='"cfport_package"' />

The workspace path, this is where your portable package will be stored.

### `allow_existing`

<Badget type="bool" defaultValue="True" />

Indicates whether to allow existing workspace. This is useful when the package process crashes and you want to restart it with caches.

### `assets`

<Badget type="List[str | dict] | None" defaultValue="None" />

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

<Badget type="List[str | dict]" defaultValue="[]" />

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
