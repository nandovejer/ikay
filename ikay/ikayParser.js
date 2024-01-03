
function ikayParser(){
    const parser = new UAParser(navigator.userAgent);
    return parser.getResult();
}

export default ikayParser;