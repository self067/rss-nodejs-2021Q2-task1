# rss-nodejs-2021Q2-task1

# Task 1. Caesar cipher CLI tool

## CLI tool accept 4 options (short alias and full name):

-s, --shift: a shift

-i, --input: an input file

-o, --output: an output file

-a, --action: an action encode/decode

## Install 


## Examples:
node src/caesar-cli.js -s 6 -a encode -i in.txt -o out.txt

node src/caesar-cli.js -s=-6 -a decode -i in.txt 

node src/caesar-cli.js -s -7 -a encode -o out.txt

node src/caesar-cli.js --shift 6 --action decode --input in.txt --output out.txt

node src/caesar-cli.js -s 6 -a encode -i ../in.txt -o ../test/out.txt

## Оценка приложения

Score: 120/120 (12 * 10 = 120)

### Базовая реализация

1. В README.md должно быть описано, как можно запустить программу из командной строки, описаны аргументы, которые можно передать приложению. +10

2. Если переданы все аргументы, приложение читает из файла и записывает в файл зашифрованный/расшифрованный текст, при этом предыдущие записи не удаляются. +10

3. action (-a, --action) encode и decode работают в соответствии с описанными в задаче примерами. +10

4. Если не переданы обязательные аргументы, приложение передает соответствующее сообщение в process.stderr и прoцесс завершается с кодом, отличным от 0. +10

5. Если переданы аргументы с путями к файлам, но файлы отсутствуют (или к ним невозможен доступ), приложение передает соответствующее сообщение в process.stderr и прoцесс завершается с кодом, отличным от 0. +10

6. Если не передан аргумент с путем до файла на чтение, то чтение осуществляется из process.stdin. +10

7. Если не передан аргумент с путем до файла на запись, то вывод осуществляется в process.stdout. +10

8. Шифруются/дешифруются только латинские буквы, регистр сохраняется, остальные символы не изменяются. +10

9. Если текст вводится из консоли, то программа не должна завершаться после выполнения шифровки/дешифровки введенного текста, т.е. должна быть возможность ввести еще текст. +10

10. Кодовая база не находится в одном файле, а разделена на файлы в соответствии с выполняемыми задачами (например - функция, преобразующая строку, в отдельном файле, код, создающий transform стрим, в отдельном файле, функция для парсинга и валидации аргументов в отдельном файле и т.п.). +10

11. Поддерживаются значения shift (-s, --shift) большие, чем длина алфавита (в этом случае алфавит проходится циклически). +10


### Продвинутая реализация

1. Поддерживаются отрицательные значения shift (-s, --shift) (в этом случае сдвиг должен осуществляться в обратную сторону). +10

