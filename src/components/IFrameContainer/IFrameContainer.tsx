import "./IFrameContainer.css";

interface IFrameContainerProps {
    url: string;
    title: string;
}

export default function IFrameContainer({ url, title }: IFrameContainerProps) {
    return (
        <div>
            <h2 className="content-title">{title}</h2>

            <iframe width="100%" height="800" src={url} title={title} />
        </div>
    );
}