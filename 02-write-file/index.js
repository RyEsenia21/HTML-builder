const fs = require('fs');
const path = require('path');

const file = path.join(__dirname, 'text.txt');
const writeStream = fs.createWriteStream(file);
const { stdin, stdout, exit } = process;

stdout.write(
  'Введите текст, он будет записан в файл text.txt\n' +
    'Для выхода нажмите комбинацию клавиш Ctrl + C или наберите команду: exit\n',
);
stdin.on('data', (chunk) => {
  if (chunk.toString().trim() === 'exit') exit();
  writeStream.write(chunk.toString());
});

process.on('exit', () => stdout.write('До свидания, приходите еще'));
process.on('SIGINT', exit);
