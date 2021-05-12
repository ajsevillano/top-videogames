//Utils
import useResizeImage from '../../../utils/useResizeImage';

const Screenshots = ({ screenshot }) => {
  const ResizeScreenshot = (img, size) => useResizeImage(img, size);
  return (
    <div className="gallery">
      {screenshot?.map((screenshots) => (
        <img
          src={ResizeScreenshot(screenshots.image, 1280)}
          key={screenshots.id}
          alt="game"
        />
      ))}
    </div>
  );
};

export default Screenshots;
