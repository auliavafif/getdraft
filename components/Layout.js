import Header from './Header';
import '../public/style.less';

export default function Layout(props) {
  return (
    <div>
      <Header />
      {props.children}
    </div>
  );
}
