data = importdata("day01_input.txt");
increased = 0;
for i = 1:length(data) - 1
    if data(i+1) > data(i); increased = increased + 1; end
end
increased

increased = 0;
curSum = 0;
prevSum = data(1)+data(2)+data(3);
for i = 1:length(data) - 2
    curSum = data(i) + data(i+1) + data(i+2);
    if curSum > prevSum; increased = increased + 1; end
    prevSum = curSum;
end
increased