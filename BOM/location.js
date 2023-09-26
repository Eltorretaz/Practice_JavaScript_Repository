//href
console.log(location.href);

//hostname
console.log(location.hostname);

//pathname
console.log(location.pathname);

//protocol
console.log(location.protocol);

//assign
const cargarDocumento = () => {
    location.assign('https://google.com')
};

//history
const back = () => {
    history.back()
};

const forward = () => {
    history.forward();
}