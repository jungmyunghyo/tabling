function fn_position_flag(totCnt, fCnt, mCnt, x) {
	if (totCnt == fCnt) {
		return false;
	} else if (totCnt == mCnt) {
	} else if (fCnt == 1 && x == 2) {
		return false;
	} else if (mCnt == 1 && x != 2) {
		return false;
	} else if (fCnt == mCnt && x % 2 != 0) {
		return false;
	} else if (fCnt == mCnt && x % 2 == 0) {
	} else {
		if (totCnt == 6) {
			if (fCnt == 2 && (x == 2 || x == 5)) {
				return false;
			} else if (fCnt == 4 && (x != 2 && x != 5)) {
				return false;
			}
		} else if (totCnt == 7) {
			if (fCnt == 2 && (x == 2 || x == 5)) {
				return false;
			} else if (fCnt == 3 && (x == 2 || x == 4 || x == 6)) {
				return false;
			} else if (fCnt == 4 && (x != 2 && x != 4 && x != 6)) {
				return false;
			} else if (fCnt == 5 && (x != 2 && x != 5)) {
				return false;
			}
		} else if (totCnt == 8) {
			if (fCnt == 2 && (x == 2 || x == 6)) {
				return false;
			} else if (fCnt == 3 && (x == 2 || x == 5 || x == 7)) {
				return false;
			} else if (fCnt == 5 && (x != 2 && x != 5 && x != 7)) {
				return false;
			} else if (fCnt == 6 && (x != 2 && x != 6)) {
				return false;
			}
		} else if (totCnt == 9) {
			if (fCnt == 2 && (x == 2 || x == 7)) {
				return false;
			} else if (fCnt == 3 && (x == 2 || x == 5 || x == 8)) {
				return false;
			} else if (fCnt == 4 && (x == 1 || x == 3 || x == 6 || x == 8)) {
				return false;
			} else if (fCnt == 5 && (x != 1 && x != 3 && x != 6 && x != 8)) {
				return false;
			} else if (fCnt == 6 && (x != 2 && x != 5 && x != 8)) {
				return false;
			} else if (fCnt == 7 && (x != 2 && x != 7)) {
				return false;
			}
		} else if (totCnt == 10) {
			if (fCnt == 2 && (x == 2 || x == 7)) {
				return false;
			} else if (fCnt == 3 && (x == 2 || x == 5 || x == 8)) {
				return false;
			} else if (fCnt == 4 && (x == 1 || x == 3 || x == 6 || x == 8)) {
				return false;
			} else if (fCnt == 6 && (x != 1 && x != 3 && x != 6 && x != 8)) {
				return false;
			} else if (fCnt == 7 && (x != 2 && x != 5 && x != 8)) {
				return false;
			} else if (fCnt == 8 && (x != 2 && x != 7)) {
				return false;
			}
		} else if (totCnt == 11) {
			if (fCnt == 2 && (x == 2 || x == 7)) {
				return false;
			} else if (fCnt == 3 && (x == 2 || x == 5 || x == 8)) {
				return false;
			} else if (fCnt == 4 && (x == 1 || x == 3 || x == 5 || x == 8)) {
				return false;
			} else if (fCnt == 5 && (x == 1 || x == 3 || x == 4 || x == 6 || x == 8)) {
				return false;
			} else if (fCnt == 6 && (x != 1 && x != 3 && x != 4 && x != 6 && x != 8)) {
				return false;
			} else if (fCnt == 7 && (x != 1 && x != 3 && x != 5 && x != 8)) {
				return false;
			} else if (fCnt == 8 && (x != 2 && x != 5 && x != 8)) {
				return false;
			} else if (fCnt == 9 && (x != 2 && x != 7)) {
				return false;
			}
		} else if (totCnt == 12) {
			if (fCnt == 2 && (x == 2 || x == 7)) {
				return false;
			} else if (fCnt == 3 && (x == 1 || x == 4 || x == 8)) {
				return false;
			} else if (fCnt == 4 && (x == 2 || x == 4 || x == 7 || x == 9)) {
				return false;
			} else if (fCnt == 5 && (x == 1 || x == 3 || x == 5 || x == 7 || x == 9)) {
				return false;
			} else if (fCnt == 7 && (x != 1 && x != 3 && x != 5 && x != 7 && x != 9)) {
				return false;
			} else if (fCnt == 8 && (x != 2 && x != 4 && x != 7 && x != 9)) {
				return false;
			} else if (fCnt == 9 && (x != 1 && x != 4 && x != 8)) {
				return false;
			} else if (fCnt == 10 && (x != 2 && x != 7)) {
				return false;
			}
		}
	}
	return true;
};