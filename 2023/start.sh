if [ -z "$1" ]
then
    echo "Please provide a name for the folder"
    exit
fi

if [ -d "$1" ]
then
    echo "Folder already exists"
    exit
fi

mkdir "$1"
cd "$1" || exit
touch "$1".py
touch input.txt

echo "from functions import read_input" >> "$1".py
echo "lines = read_input()" >> "$1".py
echo "Folder $1 created"
