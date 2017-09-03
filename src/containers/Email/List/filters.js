import {
  EMAIL_STATUS_REMOVED,
  EMAIL_STATUS_SENT,
  EMAIL_STATUS_DRAFTED,
  EMAIL_LABEL_PERSONAL,
  EMAIL_LABEL_WORK,
  EMAIL_LABEL_TRAVEL
} from "./constants"

export const filterEmailsByView = (view, emails, owner) => {
  switch (view) {
    case "inbox": {
      const filteredEmails = emails.filter(({
        from: {
          email
        }
      }) => owner.email !== email)
      return filteredEmails
    }
    case "important": {
      const filteredEmails = emails.filter(({
        isImportant
      }) => isImportant)
      return filteredEmails
    }
    case "sent": {
      const filteredEmails = emails.filter(({
        from: {
          email
        },
        status
      }) => owner.email === email && status === EMAIL_STATUS_SENT)
      return filteredEmails
    }
    case "drafts": {
      const filteredEmails = emails.filter(({
        status
      }) => status === EMAIL_STATUS_DRAFTED)
      return filteredEmails
    }
    case "trash": {
      const filteredEmails = emails.filter(({
        status
      }) => status === EMAIL_STATUS_REMOVED)
      return filteredEmails
    }
    case "personal": {
      const filteredEmails = emails.filter(({
        labels
      }) => labels.includes(EMAIL_LABEL_PERSONAL))
      return filteredEmails
    }
    case "work": {
      const filteredEmails = emails.filter(({
        labels
      }) => labels.includes(EMAIL_LABEL_WORK))
      return filteredEmails
    }
    case "travel": {
      const filteredEmails = emails.filter(({
        labels
      }) => labels.includes(EMAIL_LABEL_TRAVEL))
      return filteredEmails
    }
  }
}