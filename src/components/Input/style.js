import { makeStyles} from "@material-ui/core";

const useStylesInput = makeStyles({
    root: {
        display: 'flex',
        justifyContent: 'space-between',
        marginTop: '2%',
        border: '1px solid #00e676'
    },
    input: {
        maxWidth: '800px'
    }
});
export default useStylesInput;