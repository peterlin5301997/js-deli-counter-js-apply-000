function takeANumber(line, name) {
  line.push(name);
  return `Welcome, ${name}. You are number ${line.length} in line.`;
}

function nowServing(line) {
  if (line.length == 0) {
    return "There is nobody waiting to be served!";
  }
  else {
    var serving = line.shift();
    return "Currently serving " + serving + ".";
  }
}

function currentLine(line) {
  if (line.length == 0) {
    return "The line is currently empty.";
  }
  else {
    var orderedLine = []
    for (let i = 0; i < line.length; i++) {
      orderedLine.push(` ${i + 1}. ${line[i]}`)
    }
    return "The line is currently:" + orderedLine;
  }
}
