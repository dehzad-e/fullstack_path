# Command Line Interface

| Command | Description |
|--------|-------------|
| `pwd` | Print current directory |
| `ls`, `ls ..`, `ls ../folder` | List directory contents |
| `cd` | Change directory |
| `clear` | Clear the terminal |
| `touch` | Create a file |
| `rm` | Delete a file |
| `mkdir` | Create a directory |
| `rmdir` | Delete an empty directory |
| `rm -r` | Delete a directory and its contents |
| `echo 'Hello, Ehsan'` | Prints the text `Hello, Ehsan` |
| `echo 'Hello, Ehsan' > hello.txt` | Create `hello.txt` and write `Hello, Ehsan` to it |
| `>` | Overwrite file contents |
| `>>` | Append to file (does not overwrite) |
| `cat` | Print file contents |
| `cat hello.txt > hello_copy.txt` | Copy contents of `hello.txt` into `hello_copy.txt` (creates it if it doesn’t exist) |
| `echo $0` | Print the shell you are using |

## Finding Files and Directories

### Syntax
```bash
find [path] [option] [expression]
find . -name 'forest*'
```

### Find Options

#### Search by name
```bash
-name 'forest*'
```

#### Case insecsitive search by name
```bash
-iname 'forest*'
```

#### Search by type
```bash
-type f / -type d
```

#### Combine Options
```bash
-type d -iname 'forest*'
```

#### Example
```bash
find .. -type f -name 'large*'
```

### Paths
- Relative Path: `../forstes`
- Absolute Path: `/Users/edehzad/Desktop/SelfLearning/Scrimba/fullstack_path/04. Tools of the Trade`
- Current Directory: `.`
- Parent Directory: `..`
- Home Directory: `~`
- Root Directory: `/`

## Rename, Move, and Copy

## Remame

### Syntax
```bash
mv [old_name] [new_name]
```

> Same Syntax for files and directories


### Example
```bash
mv team_members.txt team.txt
```



## Move

### Syntax
```bash
mv [old_name] [new_location]
```
> Same Syntax for files and directories

### Example
```bash
mv capitals.txt geography_game/cities
```
> If the new location does not exist, `mv` will rename the item instead of moving it. 

## Copy

### Syntax
```bash
cp [original_name] [copy_name]
```
> Same Syntax for files and directories

### Example
#### File
```bash
cp team.txt team_backup.txt
```
#### Directory
```bash
cp -r cities cities_backup
```

> Recursive copying, using the `-r` option, means that every item at any level inside the directory is copied individually.