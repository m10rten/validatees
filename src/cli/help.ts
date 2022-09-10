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

      Available flags for all commands:
        --help: Show the help text for the command.
        --exit: Exit the process after the command has been executed.
        --ci: Exit the process with a CI friendly exit code.

      All commands and flags can be used with a single dash or a double dash.
      All commands and flags can be used with a single letter or a full word.
      Examples shown above are using the full word and double dash.
    `;
};

const getHelpTextCI = (): string => {
  return `
      '--ci', '-ci', '--c', '-c': Exit the process with a CI friendly exit code.
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

export default {
  getHelpTextCheckVersion,
  getHelpTextExit,
  getHelpTextVersion,
  getGlobalHelpText,
  getHelpTextCI,
  getHelpTextUpdate,
};
