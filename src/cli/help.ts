const getHelpTextCheckVersion = (): string => {
  return `
      '--check', '-check', '--c', '-c': Check the version of validatees.
      This command checks the version of validatees installed in your project and compares it to the latest version on npm.
      If the version on npm is newer, it will throw an error in the console. 
      If you are using this command in a CI/CD pipeline, you can use the --ci flag to exit the process with a non-zero exit code.
    `;
};
const getHelpTextExit = (): string => {
  return `
      '--exit', '-exit', '--e', '-e': Exit the process.
      This flag is used to exit the process after the command has been executed.
    `;
};
const getHelpTextVersion = (): string => {
  return `
      '--version', '-version', '--v', '-v': Get the version of validatees.
      This command gets the version of validatees installed in your project.
    `;
};
const getGlobalHelpText = (): string => {
  return `
      Available main commands:
        --help: Show this help message.
        --check: Check the version of validatees to the locale version.
        --version: Show the installed version of validatees.
        --shell: Run validatees in shell mode.
        --update: Update the version of validatees.(Not implemented yet)

      Available flags for all commands:
        --help: Show the help text for the command.
        --exit: Exit the process after the command has been executed.
        --ci: Exit the process with a CI friendly exit code.
        --verbose: Show verbose output.

      All commands and flags can be used with a single dash or a double dash.
      All commands and flags can be used with a single letter or a full word.
      Examples shown above are using the full word and double dash.
    `;
};

const getHelpTextCI = (): string => {
  return `
      '--ci', '-ci': Exit the process with a CI friendly exit code.
      This flag is used to exit the process with a non-zero exit code after the command has been executed.
      This is useful for CI/CD pipelines.
    `;
};

const getHelpTextUpdate = (): string => {
  return `
      '--update', '-update', '--u', '-u': Update the version of validatees.
      This command updates the version of validatees installed in your project.
    `;
};
const getHelpTextShell = (): string => {
  return `
      '--shell', '-shell', '--s', '-s': Run validatees in shell mode.
      This command runs validatees in shell mode.
      In shell mode, you can run validatees commands in the terminal.
      To exit shell mode, type 'exit' or type 'Ctrl + C'.
    `;
};

const getHelpTextInShell = (): string => {
  return `
      Welcome to validatees shell mode.
      Type 'exit', 'quit' or 'Ctrl + C' to exit shell mode.
      Type '?help' to get this help message.
      In shell mode, you can run validatees commands in the terminal.
      'ENTER' to execute the command.
      'UP' and 'DOWN' to navigate through the history.
      'TAB' to autocomplete.

      Press Enter to exit this help message.
      `;
};

const getHelpTextVerbose = (): string => {
  return `
      '--verbose', '-verbose', '--vb', '-vb': Show verbose output.
      This flag is used to show verbose output.
    `;
};

export default {
  getHelpTextCheckVersion,
  getHelpTextExit,
  getHelpTextVersion,
  getGlobalHelpText,
  getHelpTextCI,
  getHelpTextUpdate,
  getHelpTextShell,
  getHelpTextInShell,
  getHelpTextVerbose,
};
