---
id: jsons
title: JSONs
---

JSONs are important components of `carefree-portable` 📦️, because packaging is more of an asset-heavy task instead of a logic-heavy task.

All `JSON` files are contained in the `cfport/settings` directory, whose structure is as follows:

```text
cfport
├─ settings
├── downloads
├──── xxx.json
├──── ...
├── presets
├──── xxx.json
├──── ...
└── defaults.json
```

We will dive into the subfolders & the `defaults.json` file in the following sections.

## `downloads`

This folder contains the download URLs of some assets. For example, there's a `python_embeddables.json` in this folder, which contains the following content:

```json title="cfport/settings/downloads/python_embeddables.json"
{
  "3.10.11_32-bit": {
    # highlight-next-line
    "windows": "https://www.python.org/ftp/python/3.10.11/python-3.10.11-embed-win32.zip"
  },
  "3.10.11_64-bit": {
    # highlight-next-line
    "windows": "https://www.python.org/ftp/python/3.10.11/python-3.10.11-embed-amd64.zip"
  },
  ...
}
```

:::note
Notice that the highlighted `windows` key is optional. If your asset is platform-independent, you can omit this key:

```json title="cfport/settings/downloads/python_embeddables.json"
{
  "3.10.11_32-bit": "https://www.python.org/ftp/python/3.10.11/python-3.10.11-embed-win32.zip",
  "3.10.11_64-bit": "https://www.python.org/ftp/python/3.10.11/python-3.10.11-embed-amd64.zip",
  ...
}
```
:::

And we can download the corresponding assets by specifying the `downloads` field in the [configuration](/docs/user-guides/configurations#downloads) file. A typical example is as follows:

```json
{
  "type": "auto",
  "info": {
    # highlight-start
    "downloads": {
      "python_embeddables": "3.10.11_64-bit"
    },
    # highlight-end
    ...
  }
}
```

The downloaded assets will be placed in the root directory of the workspace (let's say it's `cfport_package`), and the structure will be as follows:

```text
cfport_package
├─ python_embeddables
├─── python-3.10.11-embed-amd64
├───── ...
└─ ...
```

:::note
The `.zip` file will be automatically extracted, as shown above.
:::

### Contributing

So, if you want to distribute your assets and allow other `carefree-portable` 📦️ users to download them, you can simply add a `json` file in this folder and tell them the `json` file name and the key / tag you want them to use.

For example, you have some fancy **Stable Diffusion** models that you want to distribute, you can add an `sd.json` file in this folder, which might contain the following content:

```json title="cfport/settings/downloads/sd.json"
{
  "fancy_sd_model_0": "https://url/to/fancy_sd_model_0.pth",
  "fancy_sd_model_1": "https://url/to/fancy_sd_model_1.pth",
  ...
}
```

And then users can download them by:

```json
{
  "type": "auto",
  "info": {
    # highlight-start
    "downloads": {
      "sd": ["fancy_sd_model_0", "fancy_sd_model_1"]
    },
    # highlight-end
    ...
  }
}
```

Notice that we specified a list of tag above, which can be used to download multiple assets associated with the same `json` file. In this case, the structure after downloading will be as follows:

```text
cfport_package
├─ sd
├─── fancy_sd_model_0.pth
├─── fancy_sd_model_1.pth
└─ ...
```

## `presets`

:::info User Guide
- [Configuration - python_requirements](/docs/user-guides/configurations#python_requirements)
:::

This folder contains the presets of some configurations, they serve as the 'increment' configuration of the [`defaults.json`](#defaultsjson) file.

A nice example is the `torch-2.1.0-cu118.json`, which can generate a portable `pytorch` Python environment with `CUDA` enabled:

```json title="cfport/settings/presets/torch-2.1.0-cu118.json"
{
  "python_requirements": [
    {
      # highlight-next-line
      "install_command": "$pip install torch==2.1.0 torchvision==0.16.0 torchaudio==2.1.0 --index-url https://download.pytorch.org/whl/cu118"
    }
  ]
}
```

:::note
Notice that the highlighted line is using `$pip` instead of `pip`. This is important because it tells `carefree-portable` 📦️ to use the `pip` executable in the `python_embeddables` folder, instead of the `pip` executable in the system path.

See [Keywords](/docs/reference/terminology#keywords) for more details.
:::

### Contributing

So, if you want to distribute your favored Python environment, you can simply add a `json` file in this folder and tell them the `json` file name. For example, you may find `diffusers` & `transformers` are very useful, so you can add a `huggingface.json` file in this folder, which might contain the following content:

```json title="cfport/settings/presets/huggingface.json"
{
  "python_requirements": [
    {
      "install_command": "$pip install torch==2.1.0 torchvision==0.16.0 torchaudio==2.1.0 --index-url https://download.pytorch.org/whl/cu118"
    },
    "diffusers",
    "transformers"
  ]
}
```

And then user can execute:

```bash
cfport config --preset huggingface
```

to obtain the full configuration, which should be like:

```json
{
  "type": "auto",
  "info": {
    # highlight-start
    "python_requirements": [
      {
        "install_command": "$pip install torch==2.1.0 torchvision==0.16.0 torchaudio==2.1.0 --index-url https://download.pytorch.org/whl/cu118"
      },
      "diffusers",
      "transformers"
    ],
    # highlight-end
    ...
  }
}
```

## `defaults.json`

This file contains the default configurations of `carefree-portable` 📦️. It is fairly simple:

```json title="cfport/settings/defaults.json"
{
  "downloads": {
    "python_embeddables": "3.10.11_64-bit"
  },
  "python_requirements": []
}
```

This means we'll only download a `python_embeddable` without any extra python packages.

:::note
In most cases, this should be left as-is to make minimal assumptions about the users' needs.
:::
