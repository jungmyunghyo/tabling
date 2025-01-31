function fn_position_flag(totCnt, fCnt, mCnt, x) {
	if (totCnt == fCnt) {
		return false;
	} else if (totCnt == mCnt) {
		return true;
	} else {
		var fDiff = Number(totCnt - fCnt);
		if (fCnt == 1 && (x == 3)) {
			return false;
		} else if (fCnt == 2 && (x == 3 || x == 4)) {
			return false;
		} else if (fDiff == 2 && (x != 3 && x != 4)) {
			return false;
		} else if (fDiff == 1 && (x != 3)) {
			return false;
		} else {
			if (totCnt == 6) {
				if (fCnt == 3) {
					if (x == 1 || x == 4 || x == 5) {return false;} else {return true;}
				}
			} else if (totCnt == 7) {
				if (fCnt == 3) {
					if (x == 1 || x == 4 || x == 5) {return false;} else {return true;}
				} else if (fCnt == 4) {
					if (x != 1 && x != 4 && x != 5) {return false;} else {return true;}
				}
			} else if (totCnt == 8) {
				if (fCnt == 3) {
					if (x == 1 || x == 4 || x == 5) {return false;} else {return true;}
				} else if (fCnt == 4) {
					if (x == 1 || x == 2 || x == 5 || x == 6) {return false;} else {return true;}
				} else if (fCnt == 5) {
					if (x != 1 && x != 4 && x != 5) {return false;} else {return true;}
				}
			} else if (totCnt == 9) {
				if (fCnt == 3) {
					if (x == 1 || x == 2 || x == 8) {return false;} else {return true;}
				} else if (fCnt == 4) {
					if (x == 1 || x == 2 || x == 5 || x == 6) {return false;} else {return true;}
				} else if (fCnt == 5) {
					if (x != 1 && x != 2 && x != 5 && x != 6) {return false;} else {return true;}
				} else if (fCnt == 6) {
					if (x != 1 && x != 2 && x != 8) {return false;} else {return true;}
				}
			} else if (totCnt == 10) {
				if (fCnt == 3) {
					if (x == 1 || x == 4 || x == 8) {return false;} else {return true;}
				} else if (fCnt == 4) {
					if (x == 1 || x == 2 || x == 5 || x == 6) {return false;} else {return true;}
				} else if (fCnt == 5) {
					if (x == 1 || x == 4 || x == 5 || x == 9 || x == 10) {return false;} else {return true;}
				} else if (fCnt == 6) {
					if (x != 1 && x != 2 && x != 5 && x != 6) {return false;} else {return true;}
				} else if (fCnt == 7) {
					if (x != 1 && x != 4 && x != 8) {return false;} else {return true;}
				}
			} else if (totCnt == 11) {
				if (fCnt == 3) {
					if (x == 1 || x == 2 || x == 8) {return false;} else {return true;}
				} else if (fCnt == 4) {
					if (x == 1 || x == 5 || x == 6 || x == 9) {return false;} else {return true;}
				} else if (fCnt == 5) {
					if (x == 1 || x == 4 || x == 5 || x == 9 || x == 10) {return false;} else {return true;}
				} else if (fCnt == 6) {
					if (x != 1 && x != 4 && x != 5 && x != 9 && x != 10) {return false;} else {return true;}
				} else if (fCnt == 7) {
					if (x != 1 && x != 5 && x != 6 && x != 9) {return false;} else {return true;}
				} else if (fCnt == 8) {
					if (x != 1 && x != 2 && x != 8) {return false;} else {return true;}
				}
			} else if (totCnt == 12) {
				if (fCnt == 3) {
					if (x == 1 || x == 2 || x == 10) {return false;} else {return true;}
				} else if (fCnt == 4) {
					if (x == 1 || x == 6 || x == 8 || x == 9) {return false;} else {return true;}
				} else if (fCnt == 5) {
					if (x == 1 || x == 4 || x == 5 || x == 9 || x == 10) {return false;} else {return true;}
				} else if (fCnt == 6) {
					if (x == 1 || x == 2 || x == 5 || x == 6 || x == 7 || x == 10) {return false;} else {return true;}
				} else if (fCnt == 7) {
					if (x != 1 && x != 4 && x != 5 && x != 9 && x != 10) {return false;} else {return true;}
				} else if (fCnt == 8) {
					if (x != 1 && x != 6 && x != 8 && x != 9) {return false;} else {return true;}
				} else if (fCnt == 9) {
					if (x != 1 && x != 2 && x != 10) {return false;} else {return true;}
				}
			}
		}
	}
	return true;
};