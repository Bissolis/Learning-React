type ImageProps = {
  src: string;
  width: number;
  height: number;
  alt?: string;
};

export default function Image({src, width, height, alt}: ImageProps){
    return(
        <img src={src} width={width} height={height} alt={alt} className="col-start-12 row-start-8"/>
    );
}