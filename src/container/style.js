import { makeStyles} from "@material-ui/core";

const useStylesApp = makeStyles({
    root: {
        backgroundColor: "#e0e0e0",
        margin: "15%",
        padding: "3%",
        justifyContent: "center"
    },
    header: {
        display: "flex",
        justifyContent: "space-between",
        paddingLeft: "45%",
        fontWeight: "bold"
    },
    name: {
        fontSize: "2rem"
    }
});
export default useStylesApp;