export function Slideshow2(props) {
    return (
        <img src={props.image} />
    );
}

export function Avatar(props) {
    return (
        <img 
            style={{ width: '50px', height: '50px', borderRadius: '50%' }} 
            src={props.src} 
            alt={props.alt}
        />
    );
}

export default function Slideshow(props) {
    return (
        <img src={props.image} />
    );
}


// 
