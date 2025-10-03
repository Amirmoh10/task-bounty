import { Placeholder } from "@/components/placeholder";
import TicketItem from "@/components/ticketItem";
import { initialTickets } from "@/data";

type TicketPageProps = {
  params: Promise<{
    ticketId: string;
  }>;
};

export default async function TicketPage({ params }: TicketPageProps) {
  const { ticketId } = await params;

  const ticket = initialTickets.find((ticket) => ticket.id === ticketId);

  if (!ticket) {
    return <Placeholder label="Ticket not found" />;
  }

  return <TicketItem ticket={ticket} />;
}
