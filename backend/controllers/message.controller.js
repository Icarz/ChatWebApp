import Conversation from "../models/conversation.model.js";
import Message from "../models/message.model.js";

// send message controller //

export const sendMessage = async (req, res) => {
  try {
    const { message } = req.body;
    const { id: receiverId } = req.params;
    const senderId = req.user._id;
    let conversation = await Conversation.findOne({
      participants: { $all: [senderId, receiverId] },
    });
    if (!conversation) {
      conversation = new Conversation({
        participants: [senderId, receiverId],
      });
    }
    const newMessage = new Message({
      senderId,
      receiverId,
      message,
    });
    if (newMessage) {
      conversation.messages.push(newMessage._id);
    }
    // socket io implementation can be added here for real-time messaging //

    await Promise.all([conversation.save(), newMessage.save()]);

    res.status(200).json(newMessage);
  } catch (error) {
    console.log("Error in sendMessage controller:", error);
    return res.status(500).json({ message: error.message });
  }
};

// get message controller //

export const getMessage = async (req, res) => {
  try {
    const { id: userToChatWith } = req.params;
    const senderId = req.user._id;

    const conversation = await Conversation.findOne({
      participants: { $all: [senderId, userToChatWith] },
    }).populate("messages");
    if (!conversation) {
      return res.status(200).json([]);
    }
    const messages = conversation.messages;
    res.status(200).json(messages);
  } catch (error) {
    console.log("Error in getMessage controller:", error);
    return res.status(500).json({ message: error.message });
  }
};
