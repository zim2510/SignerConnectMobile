import CancelIcon from "@mui/icons-material/Cancel";
import { Button, IconButton } from "@mui/material";
import { Link } from "react-router-dom";

export default function Sidebar({ onClose }) {
  return (
    <aside>
      <div className="flex flex-col min-h-screen justify-between p-3">
        <div>
          <div className="flex justify-end">
            <IconButton fontSize="large" onClick={onClose}>
              <CancelIcon></CancelIcon>
            </IconButton>
          </div>
          <h3 className="text-center text-2xl">Hello, Signer!</h3>
        </div>
        <div className="flex justify-center">
          <Button
            color="error"
            variant="contained"
            component={Link}
            to="/auth?action=logout"
          >
            Logout
          </Button>
        </div>
      </div>
    </aside>
  );
}
