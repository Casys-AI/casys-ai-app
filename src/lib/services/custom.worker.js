self.onmessage = function (e) {
    const { data } = e;

    const lines = data.split('\n');
    let hasGraphTD = false;
    let arrowIssues = [];

    // Check if the first line is "graph TD"
    if (lines[0].trim() === 'graph TD') {
        hasGraphTD = true;
    }

    // Check for arrow formatting issues
    lines.forEach((line, index) => {
        if (index > 0) { // Skip the first line
            if (line.includes('-->')) {
                if (!line.match(/^[^\-]*-->([^\-]*)$/)) {
                    arrowIssues.push(index);
                }
            }
        }
    });

    self.postMessage({
        hasGraphTD,
        arrowIssues,
    });
};
