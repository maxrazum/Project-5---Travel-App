// Calculate date difference
function dateDiff(start, end) {
    const startDate = new Date(start);
    const endDate = new Date(end);
    const duration = Math.ceil((endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24));
    if (duration >= 1) {
        return duration;
    }
}

export {dateDiff};