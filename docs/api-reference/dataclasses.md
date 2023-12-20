---
id: dataclasses
title: Dataclasses
---

import Badget from '@site/src/components/Badget';

:::info User Guide
* [Configurations](/docs/user-guides/configurations)
:::

There are some dataclasses that serve as configurations in `carefree-portable` 📦️.

## `PyRequirement`

Represents a Python requirement for a package or module.

:::tip
Only one of the four attributes should be specified.
:::

```python title="cfport/config.py"
@dataclass
class PyRequirement:
    git_url: Optional[str] = None
    package_name: Optional[str] = None
    install_command: Optional[str] = None
    requirement_file: Optional[str] = None
```

### `git_url`

<Badget type="str" defaultValue="None" />

The URL of the Git repository for the requirement.

### `package_name`

<Badget type="str" defaultValue="None" />

The name of the package for the requirement.

### `install_command`

<Badget type="str" defaultValue="None" />

The custom installation command for the requirement.

### `requirement_file`

<Badget type="str" defaultValue="None" />

The path to the requirement file.

## `Asset`

Represents an asset with optional attributes such as name, URL, path, Git URL, ignores, flatten, and destination.

:::tip
Only one of `url`, `path`, and `git_url` should be specified.
:::

```python title="cfport/config.py"
@dataclass
class Asset:
    name: Optional[str] = None
    url: Optional[str] = None
    path: Optional[str] = None
    git_url: Optional[str] = None
    ignores: Optional[List[str]] = None
    flatten: bool = False
    dst: Optional[str] = None
```

### `name`

<Badget type="str" defaultValue="None" />

The name of the asset.

### `url`

<Badget type="str" defaultValue="None" />

The URL of the asset.

### `path`

<Badget type="str" defaultValue="None" />

The local path of the asset.

### `git_url`

<Badget type="str" defaultValue="None" />

The Git URL of the asset.

### `ignores`

<Badget type="List[str]" defaultValue="None" />

The list of files or directories to ignore during asset fetching.

### `flatten`

<Badget type="bool" defaultValue="False" />

Indicates whether to flatten the asset directory structure during copying.

### `dst`

<Badget type="str" defaultValue="None" />

The destination path of the asset.
