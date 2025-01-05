import {
  Box,
  Heading,
  Text,
  Card,
  CardBody,
  Stack,
  Divider,
} from "@chakra-ui/react";
import { ParsedSection } from "../types/api";
import { ClipboardList } from "lucide-react";

interface StructuredResponseCardProps {
  sections: ParsedSection[];
}

export const StructuredResponseCard = ({
  sections,
}: StructuredResponseCardProps) => {
  return (
    <Card>
      <CardBody>
        <Box display="flex" alignItems="center" gap={3} mb={4}>
          <ClipboardList size={24} />
          <Heading size="md">Analysis Results</Heading>
        </Box>
        <Stack divider={<Divider />} spacing={4}>
          {sections.map((section, index) => (
            <Box key={index}>
              <Heading size="sm" mb={2} color="blue.600">
                {section.heading}
              </Heading>
              <Text>{section.content}</Text>
            </Box>
          ))}
        </Stack>
      </CardBody>
    </Card>
  );
};
