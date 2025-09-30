import { Typography, Button, Stack } from "@mui/material";

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
}

export const PaginationComponent: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
    return (
        <div>
            <Stack direction="row" spacing={2} alignItems="center" justifyContent="center" marginTop={2} marginBottom={2}>
                <Button variant="outlined" onClick={() => onPageChange(currentPage - 1)} disabled={currentPage === 1}>
                    <Typography variant="body1">Previous</Typography>
                </Button>
                <Typography variant="body1">Page {currentPage} of {totalPages}</Typography>
                <Button variant="outlined" onClick={() => onPageChange(currentPage + 1)} disabled={currentPage === totalPages}>
                    <Typography>Next</Typography>
                </Button>
            </Stack>

        </div>
    )
}