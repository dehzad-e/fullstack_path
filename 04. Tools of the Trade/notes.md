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

## Search in Files
### Syntax
```bash
grep [pattern] [file(s)]
```

### Example
```bash
grep 'CEO' team.txt
```
Ouput: `AB, CEO and creative Genius`

## Search Options
### Syntax
```bash
grep [option] [pattern] [file(s)]
```

### Example
```bash
grep -n ',' team*
```
Output:  
`team.txt: 1: AB, CEO and creative genius`  
`team.txt: 1: NN, hard-working intern`

### Useful Options
- show line numbers: `-n`
- Case insensitive: `-i`
- Search recursively: `-r`
    - `grep -r ',' .`
    - Every line containing a comma, in every file that lives in the current directroy or subdirectory at any depth.

## Combining Commands
> We use the pipe charactor (|)
### Syntax
```bash
[cmd] | [cmd]
```
> It gets the output of command 1 and turns it into an input for command 2.

### Example
```bash
sort team_members.txt | uniq
```
```bash
sort team_members.txt | uniq > sorted_team.txt
```

## Other Actions
- Replace content in files
- Count values in files
- Sort content of files
- Remove duplicates


## Recap

1. **Terminology & local setup**
2. **Options:** `-r`, `-n`, `-g`, `-i`, `-l`
3. **Find, search & replace:** `find`, `grep`, `sed`
4. **Rename, move & copy:** `mv`, `cp`
5. **Count & sort:** `wc`, `sort`, `uniq`
6. **Wildcard, pipe & redirection:** `*`, `|`, `>`
  
<br>
<br>

# Git and GitHub
## The Workflow

1. Create an issue on GitHub
2. Make sure you are on `main` and up to date

    ```bash
    git checkout main
    git pull
    ```

3. Create and switch to a new feature branch

    ```bash
    git checkout -b FP-1-change-font
    ```

4. Make the necessary changes
5. Stage and commit your changes

    ```bash
    git add .
    git commit -m "Change font styles"
    ```

6. Push the feature branch to GitHub

    ```bash
    git push -u origin FP-1-change-font
    ```

7. Create a pull request (PR) on GitHub
8. Review and merge the PR
9. Delete the feature branch

    **Local:**
    ```bash
    git branch -d FP-1-change-font
    ```

    **Remote (optional but recommended):**
    ```bash
    git push origin --delete FP-1-change-font
    ```