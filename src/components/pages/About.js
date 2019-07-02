/**
 * About.js, about info component
 * @author Marina Semenova (https://github.com/marinasemen0va)
 */

// imports
import React from 'react'

// About function
function About() {
    // eslint-disable-next-line
    return (
        <React.Fragment>
            <h1 style={{padding: '30px', textAlign: 'center', color:'rgba(86, 86, 88, 0.98)'}}>About</h1>
            <div style={{paddingLeft: '30px', color:'rgba(86, 86, 88, 0.98)', lineHeight: '2'}}>
                <p>&gt; This is a to do list web app made by <a href="https://github.com/marinasemen0va" target="_blank"  rel="noopener noreferrer">Marina Semenova</a> (◕‿◕✿)<br/>
                    &gt; It can be used for productivity and I hope it helps!<br/>
                    &gt; This was originally just React.js practice but it turned out neat so now it's on the web :)<br/>
                    &gt; I followed <a href="https://www.youtube.com/watch?v=sBws8MSXN7A&t=1490s" target="_blank"  rel="noopener noreferrer">this</a> tutorial on YouTube by Traversy Media<br/>
                    &gt; I'm pretty sure you need to enable JavaScript to use it so please do!<br/>
                    &gt; It is open source so here's the <a href="https://github.com/marinasemen0va/marinasemen0va.github.io" target="_blank"  rel="noopener noreferrer">GitHub repository</a><br/>
                    &gt; I think jemoticons are neat and you can find some on <a href="https://www.messletters.com/en/" target="_blank"  rel="noopener noreferrer">Messleters</a> or <a href="https://www.jemoticons.com/en/" target="_blank"  rel="noopener noreferrer">Jemoticons</a> ʕ•ᴥ•ʔ<br/>
                    &gt; Icon made by <a href="https://www.freepik.com/" target="_blank"  rel="noopener noreferrer" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" target="_blank"  rel="noopener noreferrer" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" target="_blank"   rel="noopener noreferrer"              title="Creative Commons BY 3.0">CC 3.0 BY</a></p>
            </div>
        </React.Fragment>
    )
}

// export
export default About;