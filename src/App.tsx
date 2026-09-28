import Shell from './Shell';
import { info } from './info';
import Inventario from './Inventario';

export default function App() {
 return <Shell info={info} repo="inventario-camara" page="inventario">{lang => <Inventario lang={lang}/>}</Shell>;
}
