import { IAlbum } from '../../App';
import './AlbumCard.scss';
import Tooltip from '../Tooltip/Tooltip';

interface IProps {
    album: IAlbum;
}

const AlbumCard = ({ album }: IProps) => {
    const { image, title, artist, year } = album;
    return (
        <div className="album-card">
            <img alt={`album ${title}`} src={image}></img>

            <TitleRendering title={title} />

            <p className="album-artist">{artist}</p>
            <p className="album-year">{year}</p>
        </div>
    );
};

const TitleRendering = (props: { title: string }) => {
    if (props.title.length > 20) {
        return (
            <div className="tooltip">
                <h1 className="album-title">{props.title}</h1>
                <Tooltip content={props.title} />
            </div>
        );
    }
    return <h1 className="album-title">{props.title}</h1>;
};

export default AlbumCard;
