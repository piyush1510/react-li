import React from 'react'
import './Button2.css'
import anime from 'animejs/lib/anime.es.js';

export default function Button2(props) {
    var refToThis = React.createRef();
    React.useEffect(() => {
    }, [])
    const enterHandle=()=>{
        anime({
            targets:refToThis.current.querySelector('.backdrop-btn2'),
            left:"110%",
            easing:'easeInOutQuad',
            duration:400
        })
        anime({
            targets:refToThis.current,
            color:'#9a52ff',
            scale:1.1,

            easing:'linear',
            duration:100
        })
    }
    const leaveHandle = ()=>{
        anime({
            targets:refToThis.current.querySelector('.backdrop-btn2'),
            left:"-50%",
            easing:'easeInOutQuad',
            duration:400
        })
        anime({
            targets:refToThis.current,
            color:'#3700b3',
            scale:1,

            easing:'linear',
            duration:100
        })
    }
    return (
        <button ref={refToThis} className="btn2" onMouseEnter={enterHandle} onMouseLeave={leaveHandle}>
            <div className="backdrop-btn2"></div>
            <div className="btn2-content">{props.children}</div>
        </button>
    )
}
