export default (command: string) => {
  switch (command) {
    case 'q':
    case 'quit':
    case 'exit':
      process.exit()
  }
}