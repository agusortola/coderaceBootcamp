import {
  Box,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Button,
  Text,
} from "@chakra-ui/react";

const QuestionItem = ({ question }) => {
    const handleClick = () => {
        console.log("Clickeado");
      };
  return (
    <Box flex="0" w='max-content'key={question.id} p={5} onClick={handleClick}>
            <Text fontSize={16} fontWeight={500}>{ question.title }</Text>
            <Text fontSize={12} fontWeight={300}>Date: { question.date }</Text>     
    </Box>
  );
};

export default QuestionItem;
