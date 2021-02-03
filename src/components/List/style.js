import { makeStyles} from "@material-ui/core";

const useStylesList = makeStyles({
    root: {
        listStyle: "none",
        padding: 0,
        fontWeight: "bold"
    },
    item: {
        display: "flex",
        justifyContent: "space-between"
    },
    rating: {
        color: "#fdd835"
    },
    round: {
        color: "#69f0ae"
    },
    edit: {
        color: "#00b0ff"
    },
    clear: {
        color: "red"
    }
});
export default useStylesList;