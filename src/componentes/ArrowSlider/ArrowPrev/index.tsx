function ArrowPrev(props:any){
    const { className, style, onClick } = props;
    return(
        <button 
        className={`${className} arrowPrevCustom`}
        style={{ ...style, display: "block",left:"0px"}}
        onClick={onClick}>
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="32" viewBox="0 0 20 32" fill="none">
            <path d="M0.514971 14.7561L14.7568 0.514971C15.4434 -0.171657 16.5573 -0.171657 17.2439 0.514971L18.9052 2.17621C19.5911 2.86211 19.5918 3.97302 18.9081 4.66038L7.62087 15.9996L18.9074 27.3396C19.5918 28.027 19.5903 29.1379 18.9044 29.8238L17.2432 31.485C16.5566 32.1717 15.4427 32.1717 14.7561 31.485L0.514971 17.2432C-0.171657 16.5566 -0.171657 15.4427 0.514971 14.7561Z" fill="black"/>
        </svg>
        </button>
        
    )
}

export default ArrowPrev