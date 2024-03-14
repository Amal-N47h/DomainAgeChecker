# Domain Age Checker

The Domain Age Checker is a collection of scripts written in Bash, Python, and JavaScript for determining the age of a domain by querying its WHOIS information.

## Usage

### Bash Script (`domain_age.sh`)

```bash
bash domain_age.sh domain_name
```

Replace `domain_name` with the domain you want to query.

### Python Script (`domain_age.py`)

```bash
python domain_age.py domain_name
```

Replace `domain_name` with the domain you want to query.

### JavaScript Script (`domain_age.js`)

```bash
node domain_age.js domain_name
```

Replace `domain_name` with the domain you want to query.

## Description

- `domain_age.sh`: Bash script that retrieves the creation date of a domain using WHOIS and calculates its age.
- `domain_age.py`: Python script that performs the same functionality as the Bash script but implemented in Python.
- `domain_age.js`: JavaScript script that performs the same functionality as the Bash script but implemented in JavaScript.

## Requirements

- For the Bash script, you need the whois command-line utility.
- For the Python script, you need Python installed on your system.
- For the JavaScript script, you need Node.js installed on your system.

### Installing WHOIS

- **Windows**: You can download the WHOIS utility from [Microsoft Sysinternals website](https://learn.microsoft.com/en-us/sysinternals/downloads/whois).
  
- **Ubuntu/Debian**:
  ```bash
  sudo apt install whois
  ```

- **Arch Linux**:
  ```bash
  sudo pacman -S whois
  ```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

