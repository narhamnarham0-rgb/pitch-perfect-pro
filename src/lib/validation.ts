export interface ValidationError {
  field: string;
  message: string;
}

export interface ValidationResult {
  isValid: boolean;
  errors: ValidationError[];
}

export function validateCompetitionForm(form: {
  name: string;
  description?: string;
  format: string;
  ageGroup: string;
  registrationFee: string;
  startDate: string;
  endDate?: string;
}): ValidationResult {
  const errors: ValidationError[] = [];

  // Validate name
  if (!form.name || form.name.trim().length < 3) {
    errors.push({
      field: "name",
      message: "Nama kompetisi harus minimal 3 karakter",
    });
  }

  // Validate format
  if (!form.format) {
    errors.push({
      field: "format",
      message: "Format kompetisi harus dipilih",
    });
  }

  // Validate age group
  if (!form.ageGroup) {
    errors.push({
      field: "ageGroup",
      message: "Kelompok umur harus dipilih",
    });
  }

  // Validate registration fee
  if (!form.registrationFee) {
    errors.push({
      field: "registrationFee",
      message: "Biaya registrasi harus diisi",
    });
  } else {
    const fee = Number(form.registrationFee);
    if (isNaN(fee) || fee < 0) {
      errors.push({
        field: "registrationFee",
        message: "Biaya registrasi harus berupa angka positif",
      });
    }
  }

  // Validate start date
  if (!form.startDate) {
    errors.push({
      field: "startDate",
      message: "Tanggal mulai harus diisi",
    });
  } else {
    const startDate = new Date(form.startDate);
    if (isNaN(startDate.getTime())) {
      errors.push({
        field: "startDate",
        message: "Format tanggal mulai tidak valid",
      });
    } else if (startDate < new Date()) {
      errors.push({
        field: "startDate",
        message: "Tanggal mulai tidak boleh di masa lalu",
      });
    }
  }

  // Validate end date (if provided)
  if (form.endDate) {
    const endDate = new Date(form.endDate);
    if (isNaN(endDate.getTime())) {
      errors.push({
        field: "endDate",
        message: "Format tanggal selesai tidak valid",
      });
    } else if (form.startDate && endDate < new Date(form.startDate)) {
      errors.push({
        field: "endDate",
        message: "Tanggal selesai harus setelah tanggal mulai",
      });
    }
  }

  return {
    isValid: errors.length === 0,
    errors,
  };
}

export function getFieldError(
  errors: ValidationError[],
  field: string
): string | undefined {
  return errors.find((e) => e.field === field)?.message;
}
