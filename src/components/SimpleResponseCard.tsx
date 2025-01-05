import { Box, Text, Card, CardBody } from '@chakra-ui/react';
import { MessageSquare } from 'lucide-react';

interface SimpleResponseCardProps {
  response: string;
}

export const SimpleResponseCard = ({ response }: SimpleResponseCardProps) => {
  return (
    <Card>
      <CardBody>
        <Box display="flex" alignItems="center" gap={3}>
          <MessageSquare size={24} />
          <Text fontSize="lg">{response}</Text>
        </Box>
      </CardBody>
    </Card>
  );
};