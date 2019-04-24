import VideoPlayer from './VideoPlayer.js';
import exampleVideoData from '../data/exampleVideoData.js';
import VideoList from './VideoList.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videosInList: exampleVideoData,
      videoInPlayer: exampleVideoData[0]
    };
    this.onVideoTitleClick = this.onVideoTitleClick.bind(this);
  }

  componentDidMount() {
    this.getYouTubeVideos('funny puppies');
  }

  getYouTubeVideos(query) {
    var options = {
      key: this.props.API_KEY,
      query: query
    };
    this.props.searchYouTube(options, (videos) => {
      this.setState({
        videosInList: videos,
        videoInPlayer: videos[0]
      });
    });
  }

  onVideoTitleClick(selectedVid) {
    this.setState({
      videoInPlayer: selectedVid
    });
  }

  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <div><h5><em>search</em> view goes here</h5></div>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            < VideoPlayer video={this.state.videoInPlayer}/>
          </div>
          <div className="col-md-5">
            < VideoList onClick={this.onVideoTitleClick}
              videos={this.state.videosInList} />
          </div>
        </div>
      </div>
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;
