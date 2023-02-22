export function walkTest(direction: string[], time: number): boolean {
    if (direction.length != time) {
        return false;
    }
    let vertical = 0;
    let horizontal = 0;

    for (let dir of direction) {

        switch (dir.toUpperCase()) {
            case 'N':
                vertical += 1;
                break;
            case 'S':
                vertical -= 1;
                break;
            case 'E':
                horizontal += 1;
                break;
            case 'W':
                horizontal -= 1;
                break;
        }
    }

    return vertical === 0 && horizontal === 0;

}