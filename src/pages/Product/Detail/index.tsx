import Button from '../../../components/Buttons/Button';
import { ButtonColors } from '../../../components/Buttons/Button/ButtonColors';
import CommentItemCard from '../../../components/CommentCard';
import FormContainer from '../../../components/FormComponents/FormContainer';
import TextBox from '../../../components/Inputs/TextBox';
import useProductDetail from '../../../hooks/useProductDetail';
import { 
    ProductContainer,
    ProductDesc, 
    ProductName, 
    Image, 
    Form, 
    Title, 
    CommentsContainer,
    PageContainer 
} from './styles';

function ProductDetailPage() {

    const {
        product,
        comments,
        text,
        handleSubmit,
        setText
    } = useProductDetail();

    return (
        <PageContainer>
            <ProductContainer>
                <ProductName>
                    {product?.name}
                </ProductName>
                <Image src={product?.image as string} alt={product?.name} />
                <ProductDesc>
                    {product?.description}
                </ProductDesc>
            </ProductContainer>
            <CommentsContainer>
                {
                    comments.map((comment) => {
                        return <CommentItemCard key={comment.id} comment={comment}/>
                    })
                }
            </CommentsContainer>
            <Form>
                <Title data-testid="form-title">
                    {'Faça seu Comentário'}:
                </Title>
                <FormContainer>
                        <TextBox name='text' value={text} onChange={(e) => setText(e.target.value)}/>
                    </FormContainer>
                    <FormContainer>
                        <Button 
                            text='Responder' 
                            backgroundColor={ButtonColors.primaryGradient} 
                            onClick={(e) => handleSubmit(e)}
                        />
                    </FormContainer>
            </Form>
           
        </PageContainer>
    );
};

export default ProductDetailPage;