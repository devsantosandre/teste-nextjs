import { Box, Skeleton } from "@mui/material";

interface SkeletonViewProps {
  view: "grid" | "list";
}

export const SkeletonView = ({ view }: SkeletonViewProps) => (
  <>
    <>
      {view === "grid" && (
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gridGap: 10,
          }}
        >
          <Skeleton
            variant="rounded"
            height="204px"
            sx={{ borderRadius: "12px", mb: "30px" }}
          />
          <Skeleton
            variant="rounded"
            height="204px"
            sx={{ borderRadius: "12px", mb: "30px" }}
          />
          <Skeleton
            variant="rounded"
            height="204px"
            sx={{ borderRadius: "12px", mb: "30px" }}
          />
        </Box>
      )}
    </>
    <>
      {view === "list" && (
        <>
          <Skeleton
            variant="text"
            sx={{ fontSize: "1rem", mb: "10px" }}
            height={40}
          />
          <Skeleton
            variant="rounded"
            height="83px"
            sx={{ borderRadius: "10px", mb: "30px" }}
          />
          <Skeleton
            variant="rounded"
            height="83px"
            sx={{ borderRadius: "10px", mb: "30px" }}
          />
          <Skeleton
            variant="rounded"
            height="83px"
            sx={{ borderRadius: "10px", mb: "30px" }}
          />
        </>
      )}
    </>
  </>
);
