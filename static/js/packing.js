/**
 * This function returns a position for a potential rectangle in a 2d grid.
 * @param itemsInGrid list of dicts: [{x:int,y:int,w:int,h:int}] representing current itemsInGrid in the grid
 * @param gridHeight (max height of available space)
 * @param gridWidth  (max width fo available space)
 * @param width (width of element to pack)
 * @param height (height of element to pack)
 * @return {number[]} (pos(x,y)
 */
function findSpace(itemsInGrid, gridHeight, gridWidth, width, height) {
    // identify max_width,max_height
    const max_width = gridWidth;
    const max_height = gridHeight;
    //    go linearly
    let pX = 0;
    let pY = 0;
    let found = true;
    let y = 0;
    let x = 0;
    while (y < max_height) {
        while (x < max_width) {
            console.log('evaluating:', x, y);
            for (let comp of itemsInGrid) {
                let w = comp.w;
                let h = comp.h;
                let xC = comp.x;
                let yC = comp.y;
                if (((pX + width >= xC && pX < xC) || (pX + width >= xC + w && pX < xC + w)) ||
                    ((pY + height >= yC && pY < yC) || (pY + height >= yC + h && pY < yC + h))) {
                    if (xC + w + width > max_width) {
                        console.log('max width reached');
                        pX = 0;
                        pY = yC + h;
                        console.log('evaluating:', pX, pY);
                    } else {
                        pX = xC + w;
                        console.log('evaluating:', pX, pY);

                    }
                    found = true;
                    x = pX + width + 1;
                    y = pY + height + 1;
                }
            }
            if (found) {
                console.log('went through iteration wth no collision, returning:', pX, pY);
                return [pX, pY]
            }
            x += 1
        }
        y += 1
    }
    console.log('forced return: ', pX, pY);
    return [pX, pY]
}

export default findSpace