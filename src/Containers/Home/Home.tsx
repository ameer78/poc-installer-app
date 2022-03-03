import Options from '../../Components/Options/Options';

const Home = (props: any) => {
  
  return (
    <div className="col-md-9">
        <Options store={props.store} />
    </div>
  );
}

export default Home;