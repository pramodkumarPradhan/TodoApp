export function ButtonDemo() {
    function dblClick() {
        window.open('PlayStation®5(2).jpg', 'PS-5', 'height=400 width=300')
    }
    function rightblock() {
        document.oncontextmenu = function () {
            return false;
        }
    }
    return (
        <div className="container-fluid mt-2" onContextMenu={rightblock}>
            <h4>Right click is block</h4>
            <img src="PlayStation®5(2).jpg" onDoubleClick={dblClick} alt="PS-5" height='200' width='300' />
            <h4 className="mt-4">Double click to open in another page</h4>
        </div>
    );
}
