
export const CardRecommended = ({ image, title, videoUrl }) => {
  return (
    <div className="card mx-2" style={{ width: '18rem' }}>
      <img src={image} className="card-img-top" alt={title} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <div className="embed-responsive embed-responsive-16by9">
          <iframe 
            className="embed-responsive-item" 
            src={videoUrl} 
            allowFullScreen 
            title={title}>
          </iframe>
        </div>
      </div>
    </div>
  );
};
