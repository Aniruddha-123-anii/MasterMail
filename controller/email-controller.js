import Email from "../model/email.js";

export const saveSendMail = (req, res) => {
  try {
    const email = new Email(req.body);
    email.save();

    res.status(200).json("Email Saved Sucessfully ~~~~");
  } catch (error) {
    res.status(500).json(error.message);
  }
};
export const saveDraftMail = (req, res) => {
  try {
    const email = new Email(req.body);
    email.save();

    res.status(200).json("Email Draft Saved Sucessfully ~~~~");
  } catch (error) {
    res.status(500).json(error.message);
  }
};

export const moveEmailsTotrash = async (req, res) => {
  try {
    await Email.updateMany(
      { _id: { $in: req.body } },
      { $set: { starrted: false, bin: true, type: "" } }
    );

    res.status(200).json("Email Trashed Sucessfully ~~~~");
  } catch (error) {
    res.status(500).json(error.message);
  }
};
export const toggleStarredMails = async (req, res) => {
  try {
    await Email.updateOne(
      { _id: req.body.id },
      { $set: { starrted:req.body.value } }
    );

    res.status(200).json("Email starreded Sucessfully ~~~~");
  } catch (error) {
    res.status(500).json(error.message);
  }
};
export const deleteMailFromtrash = async (req, res) => {
  try {
    await Email.deleteMany({ _id: { $in: req.body } });

    res.status(200).json("Email Deleted from Database Sucessfully ~~~~");
  } catch (error) {
    res.status(500).json(error.message);
  }
};

export const getEmails = async (req, res) => {
  try {
    let emails;
    if (req.params.type === "inbox") {
      emails = await Email.find({ type: req.params.type });
    } else if (req.params.type === "send") {
      emails = await Email.find({ type: req.params.type });
    } else if (req.params.type === "drafts") {
      emails = await Email.find({ type: req.params.type });
    } else if (req.params.type === "trash") {
      emails = await Email.find({ bin: true });
    } else if (req.params.type === "starred") {
      emails = await Email.find({ starrted: true,bin: false });
    } else if (req.params.type === "allmail") {
      emails = await Email.find({});
    }

    res.status(200).json(emails);
  } catch (error) {
    console.log("error", error);
    res.status(500).json(error.message);
  }
};
