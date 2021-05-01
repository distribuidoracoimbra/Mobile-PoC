import Axios, {AxiosInstance} from 'axios';
import FirebaseStorage from '@react-native-firebase/firestore';
import ProdutoNamespace from '../../../../domain/produto';

/**
 * https://dcoimbra-mobile.herokuapp.com/clientes?all=true
 * https://dcoimbra-mobile.herokuapp.com/produtos?limit=20
 */

export class ProdutoProviderAxiosAdapter
    implements ProdutoNamespace.ProdutoRepository_int {
    private baseURL: AxiosInstance;
    private firebaseStorage;
    constructor() {
        this.firebaseStorage = FirebaseStorage();
        this.baseURL = Axios.create({
            baseURL: 'https://dcoimbra-mobile.herokuapp.com/produtos',
            timeout: 3500,
        });
    }

    async cadastrarProduto(
        _produto: ProdutoNamespace.Produto_inf,
    ): Promise<ProdutoNamespace.Produto_inf> {
        return {} as ProdutoNamespace.Produto_inf;
    }
    async buscarProduto(
        produtoCdogio: number,
    ): Promise<ProdutoNamespace.Produto_inf | undefined> {
        await this.firebaseStorage
            .collection('produtos')
            .where('pro_codigo', '==', produtoCdogio)
            .get();

        if (!produtoCdogio) {
            return undefined;
        }

        return undefined;
    }
    async reservarQuantidade(
        _produtoCdogio: number,
        _quantidade: number,
    ): Promise<ProdutoNamespace.Produto_inf> {
        return {} as ProdutoNamespace.Produto_inf;
    }
}
