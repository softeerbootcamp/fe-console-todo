const TodoErrors = {
  UnknownCommandError: new Error("존재하지 않는 명령입니다."),
  MalformedFirstArgument: new Error("첫 번째 인자가 잘못되었습니다."),
  MalformedSecondArgument: new Error("두 번째 인자가 잘못되었습니다."),
};
Object.freeze(TodoErrors);

module.exports = TodoErrors;
